import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { COLORS, fontWeight } from "../../theme";
import { Label } from "../../components";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import injector from "../../utils/injector";
import reducer from "../../store/stories/reducer";
import saga from "../../store/stories/saga";
import {
  makeSelectIsLoading,
  makeSelectPagination,
  makeSelectStories,
} from "../../store/stories/selectors";
import {
  getStoreiesAction,
  getStoreiesPaginationAction,
  resetDataAction,
} from "../../store/stories/actions";

import { NavigationService } from '../../utils/navigationUtils'
import { Routes } from "../../navigation/Routes";

function StoriesScreen(props) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    props.getStoreies();
    return () => {
      setPage(1)
      props.resetData();
    };
  }, []);

  useEffect(() => {
    if (props.stories.length > 0) {
      props.getStoreiesPagination({
        stories: props.stories,
        page: page,
      });
    }
  }, [page, props.stories]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.base,
      }}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Label
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: fontWeight.medium,
            }}
          >
            TOP STORIES
          </Label>
        </View>
        <FlatList
          data={props.storiesPagination}
          // keyExtractor={(item, index) => `${item.id}`}
          pagingEnabled={true}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              NavigationService.navigate(Routes.detail, {
                item: item,
              })
            }}>
              <View style={[styles.row, { marginBottom: 10 }]}>
                <Label>{item.title} </Label>
              </View>
            </TouchableOpacity>
          )}
          onEndReached={() => {
            let pageNum = page + 1;
            setPage(pageNum);
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            (props.isLoading && <ActivityIndicator />) || null
          }
        />
      </View>
    </SafeAreaView>
  );
}
const withReducer = injector.injectReducer({ key: "StoriesScreen", reducer });
const withSaga = injector.injectSaga({ key: "StoriesScreen", saga });

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  storiesPagination: makeSelectPagination(),
  stories: makeSelectStories(),
});

const mapDispatchToProps = {
  getStoreies: () => getStoreiesAction(),
  getStoreiesPagination: (param) => getStoreiesPaginationAction(param),
  resetData: () => resetDataAction(),
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withReducer, withSaga, withConnect)(StoriesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  row: {
    flexDirection: "column",
    alignItems: "start",
  },
});

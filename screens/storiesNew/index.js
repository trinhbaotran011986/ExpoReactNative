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
  import reducer from "../../store/news/reducer";
  import saga from "../../store/news/saga";
  import {
    makeSelectIsLoading,
    makeSelectPagination,
    makeSelectStories,
  } from "../../store/news/selectors";
  import {
    getStoreiesNewAction,
    getStoreiesPaginationNewAction,
    resetDataAction,
  } from "../../store/news/actions";
  
  import { NavigationService } from '../../utils/navigationUtils'
  import { Routes } from "../../navigation/Routes";
  
  function StoriesNewScreen(props) {
    const [page, setPage] = useState(1);
    useEffect(() => {
      props.getStoreiesNew();
      return () => {
        setPage(1)
        props.resetData();
      };
    }, []);
  
    useEffect(() => {
      if (props.storiesNew.length > 0) {
        props.getStoreiesPagination({
          stories: props.storiesNew,
          page: page,
        });
      }
    }, [page, props.storiesNew]);
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
              NEW STORIES
            </Label>
          </View>
          <FlatList
            data={props.storiesNewPagination}
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
  const withReducer = injector.injectReducer({ key: "StoriesNewScreen", reducer });
  const withSaga = injector.injectSaga({ key: "StoriesNewScreen", saga });
  
  const mapStateToProps = createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    storiesNewPagination: makeSelectPagination(),
    storiesNew: makeSelectStories(),
  });
  
  const mapDispatchToProps = {
    getStoreiesNew: () => getStoreiesNewAction(),
    getStoreiesPagination: (param) => getStoreiesPaginationNewAction(param),
    resetData: () => resetDataAction(),
  };
  
  const withConnect = connect(mapStateToProps, mapDispatchToProps);
  export default compose(withReducer, withSaga, withConnect)(StoriesNewScreen);
  
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
  
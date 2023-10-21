import {
    StackActions,
    CommonActions,
    createNavigationContainerRef,
    DrawerActions,
  } from "@react-navigation/native";
  
  export const navigationRef = createNavigationContainerRef();
  
  export const NavigationService = {
    goBack: () => navigationRef.current?.goBack(),
    route: navigationRef.current?.getCurrentRoute(),
    dispatch: (name) => navigationRef.current?.dispatch(name),
    navigate: (route, params) =>
      navigationRef.current?.navigate(route, params),
    replace: (name, params) =>
      navigationRef.current?.dispatch(StackActions.replace(name, params)),
    openDrawer: () => navigationRef.dispatch(DrawerActions.openDrawer()),
    closeDrawer: () => navigationRef.dispatch(DrawerActions.closeDrawer()),
    reset: (name, params) =>
      navigationRef.current?.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name,
              params,
            },
          ],
        })
      ),
  };
  
import SideNav from "./SideNav";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebarNavigation.friends
    };
};
let mapDispatchToProps = (dispatch) => {
    return {};
};

const SideNavContainer = connect(mapStateToProps, mapDispatchToProps)(SideNav);

export default SideNavContainer;
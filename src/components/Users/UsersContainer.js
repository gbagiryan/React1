import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurPageAC, setTotalCountAC, setUsersAC} from "../../redux/usersReducer";

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        usersPerPage: state.usersPage.usersPerPage,
        curPage: state.usersPage.curPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        follow: (userID) => dispatch(followAC(userID)),
        setPage: (pageNum) => dispatch(setCurPageAC(pageNum)),
        setUsers: (usersArr) => dispatch(setUsersAC(usersArr)),
        setTotalCount:(usersNum)=> dispatch(setTotalCountAC(usersNum))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
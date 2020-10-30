const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CUR_PAGE = 'SET_CUR_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [],
    curPage: 3,
    usersPerPage: 5,
    totalUsers: 0
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.usersArr]
            }
        }
        case SET_CUR_PAGE: {
            return {
                ...state,
                curPage: action.pageNum
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsers: action.usersNum
            }
        }
        default:
            return state;
    }
};


export const followAC = (userId) => ({type: FOLLOW, userId});
export const setUsersAC = (usersArr) => ({type: SET_USERS, usersArr});
export const setCurPageAC = (pageNum) => ({type: SET_CUR_PAGE, pageNum});
export const setTotalCountAC = (usersNum) => ({type: SET_TOTAL_COUNT, usersNum});


export default usersReducer;
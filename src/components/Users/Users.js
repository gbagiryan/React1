import React from "react";
import classes from './Users.module.css';
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curPage}&count=${this.props.usersPerPage}`)
            .then(res => {
                this.props.setUsers([...res.data.items]);
                this.props.setTotalCount(res.data.totalCount)
            });
    }

    changePage(page) {
        this.props.setPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPerPage}`)
            .then(res => {
                this.props.setUsers([...res.data.items])
            });
    }

    render() {
        //let pagesCount = Math.ceil(this.props.totalUsers / this.props.usersPerPage);
        let pages = [];
        for (let i = 1; i <= 10; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(page =>
                        <span
                            className={this.props.curPage === page ? [classes.activePage, classes.page].join(' ') : classes.page}
                            onClick={() => this.changePage(page)}>
                            {page}
                        </span>
                    )}
                </div>
                <div className={classes.users}>
                    {this.props.users.map(user => <User user={user} follow={this.props.follow} key={user.id}/>)}
                </div>
                <button>Show more users</button>
            </div>
        );
    }

}

export default Users;
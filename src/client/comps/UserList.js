import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li>{user.name}</li>
        });
    }

    render() {
        return (
            <div>
                User list component
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users || [] };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
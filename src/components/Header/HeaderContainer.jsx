import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";


class HeaderContainer extends Component {


    render() {
        return (
            <Header
                {...this.props}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.Auth.isFetching,
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)
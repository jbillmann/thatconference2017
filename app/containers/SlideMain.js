import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../stores/slideStore';
import slideList from '../utils/slideList';
import DevTools from './DevTools';

class SlideMain extends React.Component {
    constructor(props) {
        super(props);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleUserChange = this._handleUserChange.bind(this);
        this._handleUserSave = this._handleUserSave.bind(this);
        this._handleToggleTools = this._handleToggleTools.bind(this);
    }

    componentWillMount() {
        document.onkeydown = (e) => this._handleKeyDown(e);
    }

    render() {
        let CurrentSlide = slideList[this.props.slides.currentSlide];
        let dynamicProps = this._getDynamicProps(this.props.slides.currentSlide);
        var Tools = process.env.NODE_ENV === 'production' || !this.props.slides.showTools ? null : <DevTools />;
      
        return (
            <div className="container slideView">
                <CurrentSlide {...dynamicProps} />
                <hr />
                <br />
                <footer>
                    <div className="row">
                        <a href="#" onClick={this._handleToggleTools}><i>A Time Traveling Tale of Immutability And The Many Powers of Redux</i></a>
                    </div>
                </footer>
                {Tools}
            </div>
        );
    }

    _getDynamicProps(slide) {
        let props = {};

        if(slide == 'TimeTravelExample') {
            props.user = this.props.slides.user;
            props.users = this.props.slides.users;
            props.isLoading = this.props.slides.isLoading;
            props.errors = this.props.slides.errors;
            props.showErrors = this.props.slides.user.showErrors;
            props.onChange = this._handleUserChange;
            props.onSave = this._handleUserSave;
        }

        return props;
    }

    _handleKeyDown(e) {
        if (e.keyCode == '37') {
            this.props.actions.moveSlideBackward();
        }
        else if (e.keyCode == '39') {
            this.props.actions.moveSlideForward();
        }
    }

    _handleUserChange(e, prop) {
        this.props.actions.updateUser({ [prop]: e.target.value });
    }

    _handleUserSave(e) {
        e.preventDefault();
        this.props.actions.updateUser({ showErrors: true });

        if(!this.props.slides.hasErrors) {
            this.props.actions.saveUser();
        }
    }

    _handleToggleTools() {
        this.props.actions.toggleTools();
    }
};

const mapStateToProps = state => ({
    slides: state.slides
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, actions), dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SlideMain);
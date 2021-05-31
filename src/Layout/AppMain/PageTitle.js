import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

class PageTitle extends Component {
    randomize(myArray) {
        return myArray[Math.floor(Math.random() * myArray.length)];
    }

    render() {
        let {
            enablePageTitleIcon,
            enablePageTitleSubheading,

            heading,
            icon,
            subheading
        } = this.props;
        // var arr = [<TitleComponent1 />, <TitleComponent2 />, <TitleComponent3 />]
        return (

            <div className="app-page-title">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div
                            className={cx("page-title-icon", {'d-none': !enablePageTitleIcon})}>
                            <i className={icon}/>
                        </div>
                        <div>
                            {heading}
                            <div
                                className={cx("page-title-subheading", {'d-none': !enablePageTitleSubheading})}>
                                {subheading}
                            </div>
                        </div>
                    </div>
                    <div className="page-title-actions">
                        {}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
 } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { library, expand } = this.props;
        if (expand) {
        return (
            <CardSection>
                <Text style={{ flex: 1 }}>
                    {library.description}
                </Text>
            </CardSection>
            );
        }
    }

    render() {
        const { textStyle } = styles;
        const { selectLibrary } = this.props;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={textStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expand = state.librarySelectionId === ownProps.library.id;
    return { expand };
};

export default connect(mapStateToProps, actions)(ListItem);

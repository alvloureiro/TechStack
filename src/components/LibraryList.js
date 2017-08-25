import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const { data } = this.props;

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(data);
    }

    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        const { data } = this.props;
        return (
            <ListView 
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { data: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

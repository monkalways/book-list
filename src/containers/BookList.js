import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

export const BookList = ({ books }) => {
    const renderList = () => {
        return books.map((book) => (
            <List.Item key={book.title}>{book.title}</List.Item>
        ));
    };

    return (
        <List>
            {renderList()}
        </List>
    );
}

const mapStateToProps = (state) => ({
    books: state.books
});

export default connect(mapStateToProps)(BookList);
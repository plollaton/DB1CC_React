import React from 'react';

import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { removePostAction } from '../redux/posts';

export const PostList = ({ postsLindos, removePost }) => (
    <div>
        <ListGroup>
            {
                postsLindos.map((post, index) => (
                    <ListGroupItem key={index}>
                        {post.description}
                        <Button
                            type='button'
                            close
                            onClick={() => removePost(index)} />
                    </ListGroupItem>
                ))
            }

        </ListGroup>
    </div>
);

const mapStateToProps = state => {
    return {
        postsLindos: state.posts,
    }
}

const mapDispatchToProps = {
    removePost: removePostAction
}

const PostListConnected = connect(mapStateToProps, mapDispatchToProps)(PostList);

export default PostListConnected;
import React from "react";
import {Button} from 'reactstrap';
import './post-status-filter.css';

const PostStatusFilter = () => {
        return (
            <div className="btn-group">
              <Button outline color="info">All</Button>
              <button type="button" className="btn btn-info">All notes</button>
              <button type="button" className="btn btn-outline-secondary">Liked notes</button>
            </div>
        )
}

export default PostStatusFilter;
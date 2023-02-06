import React from 'react';
import moment from 'moment';

function DisplayArticleCard(props) {
  const { title, author, url, created_at, comments, points } = props;
  let date = moment(created_at).format('MMM DD YYYY');
  return (
    <li style={{ listStyle: 'none' }}>
      <div class='articleHeader'>
        <div class='title-container'>
          <a class='title' href={url}>
            {title} <span>({url})</span>
          </a>
        </div>
      </div>
      <div class='articleFooter'>
        <div>
          {points} Points | {author} | {date} | {comments} Comments
        </div>
      </div>
    </li>
  );
}

export default DisplayArticleCard;

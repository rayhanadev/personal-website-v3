import React from 'react';
import { mutate } from 'swr';

import styles from './GuestBookEntry.module.scss';

export default function GuestBookEntry({ entry, user }) {
  const deleteEntry = async (event) => {
    event.preventDefault();

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE'
    });

    mutate('/api/guestbook');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>{entry.body}</div>
      <div className={styles.info}>
        <p className={styles.author}>{entry.created_by}</p>
        /
        <p className={styles.date}>
          {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </p>
        {user && entry.created_by === user.name && (
          <>
            /
            <button
              className={styles.deleteBtn}
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
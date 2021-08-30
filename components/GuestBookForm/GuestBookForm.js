import React, { useState, useRef } from 'react';
import useSWR, { mutate } from 'swr';

import styles from './GuestBookForm.module.scss';

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

export default function GuestBookForm({ initialEntries }) {
  const [form, setForm] = useState(false);
  const inputEl = useRef(null);
  const { data: user } = useSWR('/api/user', fetcher);
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    initialData: initialEntries
  });

  const leaveEntry = async (event) => {
    event.preventDefault();
    setForm({ state: 'loading' });

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: 'error',
        message: error
      });
      return;
    }

    inputEl.current.value = '';
    mutate('/api/guestbook');
    setForm({
      state: 'success',
      message: `Hooray! Thanks for signing my Guestbook.`
    });
  };

  return '';
}
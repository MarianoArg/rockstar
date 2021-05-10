import { Link, Route, BrowserRouter as Router, Switch, useParams } from 'react-router-dom';

import React from 'react';

export default function DetailPage() {
  const { id } = useParams();
  return (
    <section>
      <div>Detail page {id}</div>
    </section>
  );
}

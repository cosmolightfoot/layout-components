import React from 'react';

const styles = {
  background: 'rgb(200, 0, 255)',
  width: '200',
  height: '200'
};

export default function Color() {
  return (
    <dl>
      <dt>Color</dt>
      <dd>Fuschia</dd>

      <dt>Hex</dt>
      <dd>C800FF</dd>

      <dt>RGB</dt>
      <dd>(200, 0, 255)</dd>

      <section style={styles} width="200" height="200">_</section>
    </dl>
  );
}

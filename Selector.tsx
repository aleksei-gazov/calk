import * as React from 'react';
import './style.css';

export const Selector =() => {
  return (
    <div>
     <select name="town" id="s1">
  <option value="msk" ></option>
  <option value="spb">Санкт-Петербург</option>
  <option value="other">другой</option>
</select>
    </div>
  );
}
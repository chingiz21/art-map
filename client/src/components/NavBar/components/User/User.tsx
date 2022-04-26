import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import './User.css';
import { Context } from '../../../../index';

const User: React.FC = observer(() => {
  const context = useContext(Context);

  console.log(context);

  return (
    <div>
      <h1>{context?.user?.user?.email}</h1>
    </div>
  )
}
)

export default User
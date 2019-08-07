import React, { useContext } from 'react'
import UserItem from '../components/UserItem';
import Spinner from '../components/Spinner';
import GitHubContext from '../context/github/GitHubContext';


const Users = () => {
    const githubContext = useContext(GitHubContext);

    const { loading, users } = githubContext;

        if(loading) {
            return <Spinner />
        } else {
            return (
                <div style={userStyle}>
                    {users.map(user => 
                    <UserItem key={user.id} user={user} />
                    )
                    }
                    
                </div>
            )
        }
}


const userStyle= {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users

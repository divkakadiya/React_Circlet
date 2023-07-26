import React from 'react'

const Asg = () => {
    let arr = [
        {
            name: 'Divyesh',
            age: 18,
            phone: 1122334455,
            email: 'divyesh@email.com',
            salary: 100000,
            gender: 'male'
        },
        {
            name: 'Divya',
            age: 35,
            phone: 2233445566,
            email: 'divya@email.com',
            salary: 21000,
            gender: 'female'
        },
        {
            name: 'Rohan',
            age: 26,
            phone: 3344556677,
            email: 'rohan@email.com',
            salary: 57000,
            gender: 'male'
        },
        {
            name: 'Rohini',
            age: 40,
            phone: 4455667788,
            email: 'rohini@email.com',
            salary: 20000,
            gender: 'female'
        },
        {
            name: 'Mohan',
            age: 20,
            phone: 3344556677,
            email: 'mohan@email.com',
            salary: 10000,
            gender: 'male'
        },
        {
            name: 'Ram',
            age: 30,
            phone: 3344556677,
            email: 'ram@email.com',
            salary: 60000,
            gender: 'male'
        },
        {
            name: 'Drashti',
            age: 25,
            phone: 3344556677,
            email: 'drashti@email.com',
            salary: 28000,
            gender: 'female'
        },
        {
            name: 'Aarvi',
            age: 20,
            phone: 3344556677,
            email: 'aarvi@email.com',
            salary: 85000,
            gender: 'female'
        },
        {
            name: 'Preet',
            age: 15,
            phone: 3344556677,
            email: 'preet@email.com',
            salary: 95000,
            gender: 'male'
        },
        {
            name: 'Krishna',
            age: 22,
            phone: 3344556677,
            email: 'krishna@email.com',
            salary: 200000,
            gender: 'female'
        },
    ]

    return (
        <div>
            <h1 style={{ margin: '10px 0' }}>All employee List Above 50000 Rs.</h1>
            <table border={1} style={{ margin: '0 auto' }}>
                <tbody>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>PHONE</th>
                        <th>EMAIL</th>
                        <th>SALARY</th>
                        <th>GENDER</th>
                    </tr>
                    {
                        arr.filter(v => v.salary > 50000).map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.salary}</td>
                                <td>{data.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h1 style={{ margin: '10px 0' }}>Female employee List</h1>
            <table border={1} style={{ margin: '0 auto' }}>
                <tbody>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>PHONE</th>
                        <th>EMAIL</th>
                        <th>SALARY</th>
                        <th>GENDER</th>
                    </tr>
                    {
                        arr.filter(v => v.gender == 'female').map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.salary}</td>
                                <td>{data.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h1 style={{ margin: '10px 0' }}>Employee List whose age is greater then 30</h1>
            <table border={1} style={{ margin: '0 auto' }}>
                <tbody>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>PHONE</th>
                        <th>EMAIL</th>
                        <th>SALARY</th>
                        <th>GENDER</th>
                    </tr>
                    {
                        arr.filter(v => v.age > 30).map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.salary}</td>
                                <td>{data.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h1 style={{ margin: '10px 0' }}>Employee list female salary should be 20k t0 30k between</h1>
            <table border={1} style={{ margin: '0 auto' }}>
                <tbody>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>PHONE</th>
                        <th>EMAIL</th>
                        <th>SALARY</th>
                        <th>GENDER</th>
                    </tr>
                    {
                        arr.filter(v => v.gender == 'female' && v.salary > 20000 && v.salary < 30000).map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.salary}</td>
                                <td>{data.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h1 style={{ margin: '10px 0' }}>Salary increase 10% age should be above 25</h1>
            <table border={1} style={{ margin: '0 auto' }}>
                <tbody>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>PHONE</th>
                        <th>EMAIL</th>
                        <th>SALARY</th>
                        <th>GENDER</th>
                    </tr>
                    {
                        arr.filter(v => v.age > 25).map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.salary += data.salary * 10 / 100}</td>
                                <td>{data.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Asg

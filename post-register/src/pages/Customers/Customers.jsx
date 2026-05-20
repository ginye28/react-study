import { useEffect, useState } from "react";
import * as s from "./styles";

function Customers() {
    const [ customers, setCustomers ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/customers")
        .then((response) => {
            console.log(response);
            response.json()
            .then((responseBody) => {
                console.log(responseBody);
                setCustomers(responseBody);
            })
        })
    }, []);

    return (
        <div>
           <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>전화번호</th>
                        <th>주소</th>
                        <th>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(customer => (
                            <tr>
                                <td>{customer.id}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.address}</td>
                                <td>{customer.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> 
        </div>
    )
}

export default Customers;
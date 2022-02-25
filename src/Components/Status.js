import React from 'react';

const Status = ({ setStatus, t1, t2, t3, t4, t5, t6, t7, t8, duration }) => {
    return ( 
        <div className="status">
            <table>
                <tr>
                    <th colspan="2">Status</th>
                </tr>
                <tr>
                    <td>t1</td>
                    <td>{t1}</td>
                </tr>
                <tr>
                    <td>t2</td>
                    <td>{t2}</td>
                </tr>
                <tr>
                    <td>t3</td>
                    <td>{t3}</td>
                </tr>
                <tr>
                    <td>t4</td>
                    <td>{t4}</td>
                </tr>
                <tr>
                    <td>t5</td>
                    <td>{t5}</td>
                </tr>
                <tr>
                    <td>t6</td>
                    <td>{t6}</td>
                </tr>
                <tr>
                    <td>t7</td>
                    <td>{t7}</td>
                </tr>
                <tr>
                    <td>t8</td>
                    <td>{t8}</td>
                </tr>
            </table>
        </div>
     );
}
 
export default Status;
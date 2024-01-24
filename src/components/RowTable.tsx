import { PropsWithChildren } from "react";
import IStudent from "../types/IStudent";

const RowTable = ({name, number}: PropsWithChildren<IStudent>)=>{
    return(
        <tr>
            <td className="align_center"> { number } </td>
            <td> { name } </td>
            <td className="align_center">1.0</td>
            <td className="align_center">---</td>
            <td className="align_center">1.0</td>
            <td className="align_center">---</td>
            <td className="align_center">1.5</td>
            <td className="align_center">---</td>
            <td className="align_center">1.9</td>
            <td className="align_center">---</td>
            <td className="align_center">5.4</td>
        </tr>
    );
};

export default RowTable;
import RowTable from "./RowTable";
import IStudent from "../types/IStudent";

const fake_response_api: IStudent[] = [
    {
        id: "rgtdt",
        name: "Antonio Sala Barbosa",
        number: 1,
        classroomID: "asdsadasd"
    },

    {
        id: "rteretret",
        name: "Matheus Motta",
        number: 2,
        classroomID: "asdsadasd"
    },

    {
        id: "vcbvcbcbc",
        name: "Danilo do Carmo",
        number: 3,
        classroomID: "asdsadasd"
    },

    {
        id: "rgtdt",
        name: "Antonio Sala Barbosa",
        number: 4,
        classroomID: "asdsadasd"
    },

    {
        id: "rteretret",
        name: "Matheus Motta",
        number: 5,
        classroomID: "asdsadasd"
    },

    {
        id: "vcbvcbcbc",
        name: "Danilo do Carmo",
        number: 6,
        classroomID: "asdsadasd"
    },

    {
        id: "rgtdt",
        name: "Antonio Sala Barbosa",
        number: 7,
        classroomID: "asdsadasd"
    },

    {
        id: "rteretret",
        name: "Matheus Motta",
        number: 8,
        classroomID: "asdsadasd"
    },

    {
        id: "vcbvcbcbc",
        name: "Danilo do Carmo",
        number: 9,
        classroomID: "asdsadasd"
    }
];

const Table = ()=>{
    return(
        <table className="table_container">
            <caption>1º Bimestre</caption>

            <thead className="table_head">
                <tr>
                    <th className="table_column_number">Nº</th>
                    <th className="table_column_student">Nome do Aluno</th>
                    <th className="table_column_grade">Nota 1</th>
                    <th className="table_column_grade">Rec 1</th>
                    <th className="table_column_grade">Nota 2</th>
                    <th className="table_column_grade">Rec 2</th>
                    <th className="table_column_grade">Nota 3</th>
                    <th className="table_column_grade">Rec 3</th>
                    <th className="table_column_grade">Nota 4</th>
                    <th className="table_column_grade">Rec 4</th>
                    <th className="table_column_total">Total</th>
                </tr>
            </thead>

            <tbody className="table_body">
                {
                    fake_response_api &&
                    fake_response_api.map(({id, name, number}) => {
                        return (
                            <RowTable 
                                key={id}
                                name={name}
                                number={number}
                            />
                        );
                    })
                }
            </tbody>
        </table>
    )
};

export default Table;
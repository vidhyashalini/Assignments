function StudentList() {
    
    let studArray = [
        { sid: 10, sname: "Stephanie", course: "Engineering", age: 21, Total: 80},
        
    ];

    let resultArray2 = studArray.map((item) => {
        return <tr>
            <td>   {item.sid}  </td>
            <td>   {item.sname}  </td>
            <td>   {item.course}  </td>
            <td>   {item.age}  </td>
            <td>   {item.Total}  </td>
        </tr>
    });

    return (
        <>
            <h3>Student Information</h3>
            <table border="2" width="600" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Student id</th>
                    <th>Student name</th>
                    <th>Course</th>
                    <th>Age</th>
                    <th>Total</th>
                </tr>
                {resultArray2}
            </table>
        </>
    );
}

export default StudentList;
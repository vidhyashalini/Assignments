function DocList() {
    
    let docsArray = [
        { docid: 10, docname: "John", designation: "Cardiologist",experience: "10", contact: 1234567890},
        { docid: 20, docname: "Stephanie", designation: "Neurologist",experience: "11", contact: 456789032},
        { docid: 30, docname: "Mary", designation: "Pediatrician",experience: "5", contact: 1234056789},
        { docid: 40, docname: "Smith", designation: "Surgeon",experience: "19", contact: 123456700},
    ];

    let resultArray2 = docsArray.map((item) => {
        return <tr>
            <td>   {item.docid}  </td>
            <td>   {item.docname}  </td>
            <td>   {item.designation}  </td>
            <td>   {item.experience}  </td>
            <td>   {item.contact}  </td>
        </tr>
    });

    return (
        <>
            <h3>Array of Doctors Information</h3>
            <table border="2" width="600" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Doctor id</th>
                    <th>Doctor name</th>
                    <th>Designation</th>
                    <th>Experience</th>
                    <th>Contact</th>
                </tr>
                {resultArray2}
            </table>
        </>
    );
}

export default DocList;
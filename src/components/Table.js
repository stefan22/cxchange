const DataTable = ({data,fiatAmt}) => {
    console.log('data is ',data, 'fiat amt is ',fiatAmt)
    return (
        <table className="crypto-table">
            <tbody>
                {
                    Object.entries(data).map(([code,rate]) => {
                        const xamt = fiatAmt * rate || 0.0;
                        return (
                            <tr key={code}>
                                <td>{code}</td>
                                <td>
                                    {xamt.toLocaleString("en", {
                                    style: "currency",
                                    currency: code,
                                    })}
                                </td>
                            </tr>

                        )
                    })
                }

            </tbody>
        </table>
    )
}



export default DataTable;
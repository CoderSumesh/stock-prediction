export default function Pivot({ data }) {
    return (
        <div className="mb-10">
            <table className="w-full border text-center">
                <thead className="border-b bg-yellow-100">
                    <tr className="border-b">
                        <th colspan="3" className="px-6 py-4"> Fibo Pivot </th>
                    </tr>
                    <tr>
                        <th className="border-r px-6 py-4"> 61% </th>
                        <th className="border-r px-6 py-4"> 38% </th>
                        <th className="px-6 py-4"> 50% </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            className="border-r px-6 py-4">
                            {Math.round(data.fiboPivot61) || '-'}
                        </td>
                        <td
                            className="border-r px-6 py-4">
                            {Math.round(data.fiboPivot38) || '-'}
                        </td>
                        <td className="px-6 py-4">
                            {Math.round(data.fiboPivot50) || '-'}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
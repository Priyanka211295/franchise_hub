import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ApplicationDetails = () => {
    const { uid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`/api/applications/${uid}`) // Fetch details of specific application
            .then((res) => res.json())
            .then((data) => setDetails(data))
            .catch((error) => console.error("Error fetching application details:", error));
    }, [uid]);

    if (!details) return <p>Loading...</p>;

    return (
        <div>
            <h2>Application Details</h2>
            <table>
                <tbody>
                    {Object.entries(details).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationDetails;

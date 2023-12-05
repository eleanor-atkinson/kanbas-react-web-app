import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function Account() {
    const navigate = useNavigate();
    const [account, setAccount] = useState(null);
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/signin");
    };
    useEffect(() => {
        fetchAccount();
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {console.log(account)}
            {account && (
                <form>
                    <div className="col-12">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            value={account.password}
                            onChange={(e) => setAccount({
                                ...account,
                                password: e.target.value
                            })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={account.firstName}
                            onChange={(e) => setAccount({
                                ...account,
                                firstName: e.target.value
                            })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="lastName" className="form-label">
                            Lastname
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={account.lastName}
                            onChange={(e) => setAccount({
                                ...account,
                                lastName: e.target.value
                            })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="dob" className="form-label">
                            DOB
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="dob"
                            value={account.dob}
                            onChange={(e) => setAccount({
                                ...account,
                                dob: e.target.value
                            })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            value={account.email}
                            onChange={(e) => setAccount({
                                ...account,
                                email: e.target.value
                            })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="role" className="form-label">
                            Role
                        </label>
                        <select
                            className="form-select"
                            id="role"
                            onChange={(e) => setAccount({
                                ...account,
                                role: e.target.value
                            })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                    <br />
                    <button className="btn btn-primary" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-primary" onClick={signout}>
                        Signout
                    </button>
                </form>
            )
            }
            <br />
            <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
                Users
            </Link>
        </div >
    );
}
export default Account;

/*
<Link to="../users/table" className="btn btn-warning w-100">
                Users
            </Link>
            */
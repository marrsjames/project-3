const Role = {
    Admin = 'admin',
    Doctor = 'doctor',
    Patient = 'patient'
}

// will this be  hard code for a doctor, but then how do we get the password? 

module.exports = {
    Role: Role,
    users: [
        { id: 1, username: 'Admin01', role: Role.Admin},
        { id: 2, username: 'Doctor01', role: Role.Doctor},
        { id: 3, username: 'Patient01', role: Role.Patient}
    ]
}
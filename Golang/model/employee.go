package model

// Employee struct will be the data mapping interface of all employee REST API data
type Employee struct {
	ID             string `json:"id"`
	Name           string `json:"name"`
	Designation    string `json:"designation"`
	Department     string `json:"department"`
	JoiningDate    string `json:"joining_date"`
	Address        string `json:"address"`
	OfficeLocation string `json:"office_location"`
	Status         string `json:"status"`
	EmailID        string `json:"email"`
	PhoneNumber    string `json:"phone_number"`
}

// CustomMessage is a structure for custom message with Gin
type CustomMessage struct {
	Message string `json:"message"`
}

// Location is a struct for mapping location interface of all employees
type Location struct {
	Delhi     int `json:"Delhi"`
	Bangalore int `json:"Bangalore"`
	Hyderabad int `json:"Hyderabad"`
	Newyork   int `json:"Newyork"`
}

// Designation is a struct for mapping designation interface for all employees
type Designation struct {
	Developer        int `json:"Developer"`
	DevOpsConsultant int `json:"DevOps Consultant"`
	Manager          int `json:"Manager"`
}

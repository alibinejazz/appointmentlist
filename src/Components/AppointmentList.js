import React, { useState, useEffect } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:8080/appointments/getall");
      const data = await response.json();
      setAppointments(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <div>
        <Typography variant="h4" align="center" m="2">Consultant Appointments</Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        appointments.map((appointment) => (
          <Box
            key={appointment.id}
            padding={2}
            display="flex"
            justifyContent="center"

          >
            <Box sx={{
                width: "50vw",
                height:"4vw",
                backgroundColor: '#a0d4d4',
                borderRadius: '15px',
                marginRight: '25px',
                padding:"10px",
              }}
            > 
            <Box 
            display="flex"
            justifyContent="space-around" 
            alignItems= "center"
            marginTop='10px'
            >
               <Typography >Todays Appointment </Typography>
              <Typography>Date and Time: <br/> {appointment.created}</Typography>
              <Typography >Today's Meeting link: <br/> https://www.zoom.com/ajaomeetpr</Typography>
              </Box> 
            </Box>
            <Box>
              <Button variant="contained" sx ={{
                bgcolor:"#a0d4d4",
                width:"10vw",
                height:"5vw",
                borderRadius: '15px',
                border:"1px solid white",
                '&:hover': {
                    bgcolor: 'rgb(80,212,212)',
                  },
              }}>
                <CheckCircleIcon/>
              </Button>
            </Box>
          </Box>
        ))
      )}
    </div>
  );
};

export default AppointmentList;

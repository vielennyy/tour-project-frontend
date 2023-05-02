import { useState, useEffect } from 'react'
import { Box, Typography, FormControl, TextField, Button, Input, Grid } from '@mui/material'
import { MainAccommodationInfoProps, User } from 'src/components/TypesAndInterfaces'
import { MainInfo } from './MainInfo'
import { Geolocation } from './Geolocation'
import { Facilities } from './Facilities'
import { Payment } from './Payment'

interface displayCardsProps {
    mainInfo: MainAccommodationInfoProps|undefined,
    setMainInfo: React.Dispatch<React.SetStateAction<MainAccommodationInfoProps>>,
    showMainInfo: boolean,
    setShowMainInfo: React.Dispatch<React.SetStateAction<boolean>>,
    showGeolocation: boolean,
    setShowGeolocation: React.Dispatch<React.SetStateAction<boolean>>,
    showFacilities: boolean,
    setShowFacilities: React.Dispatch<React.SetStateAction<boolean>>,
    isFinished: boolean,
    setFinished: React.Dispatch<React.SetStateAction<boolean>>,
}

export const AccommodationRegistration = () => {
    const [user, setUser] = useState<User>()
    const [showMainInfo, setShowMainInfo] = useState<boolean>(user?.role==="partner")
    const [mainInfo, setMainInfo] = useState<MainAccommodationInfoProps>()
    const [showGeolocation, setShowGeolocation] = useState(false)
    const [showFacilities, setShowFacilities] = useState(false)
    const [isFinished, setFinished] = useState(false)
    console.log(user?.role==="partner")
    console.log(showMainInfo)
    
    const props = {
        mainInfo: mainInfo,
        setMainInfo: setMainInfo,
        showMainInfo: showMainInfo,
        setShowMainInfo: setShowMainInfo,
        showGeolocation: showGeolocation,
        setShowGeolocation: setShowGeolocation,
        showFacilities: showFacilities,
        setShowFacilities: setShowFacilities,
        isFinished: isFinished,
        setFinished: setFinished,
    }
  
    const getUser = async() => {
        const response = await fetch (`https://cktour.club/api/v1/users/${localStorage.getItem('id')}`,
            {
                method: "GET",
                headers: { Authorization: 'Bearer ' +  localStorage.getItem('token') }
            });
        const json = await response.json();
        console.log(json)
        return setUser(json)
    }

    useEffect(() => {
        getUser()
        setShowMainInfo(user?.role === 'partner')
    }, [user]);

    // setShowMainInfo(user?.role==='partner')
    // console.log(mainInfo)
    // useEffect(() => {
    //     fetch(`https://cktour.club/api/v1/users/${localStorage.getItem('id')}`, {
    //         method: "GET",
    //         headers: { Authorization: 'Bearer ' +  localStorage.getItem('token') }
    //         })
    //         .then(response => response.json())
    //         .then(json => setUser(json));
    //   }, []);

    console.log(user)

    return(
        <>
        {user?.role === 'tourist' ? 
            <>
                <Payment/>
                <MainInfo 
                    // mainInfo= {mainInfo}
                    setMainInfo= {setMainInfo}
                    showMainInfo= {showMainInfo}
                    setShowMainInfo= {setShowMainInfo}
                    // showGeolocation= {showGeolocation}
                    setShowGeolocation= {setShowGeolocation}
                    // showFacilities= {showFacilities}
                    // setShowFacilities= {setShowFacilities}
                    // isFinished= {isFinished}
                    // setFinished= {setFinished}
                />
                <Geolocation 
                    mainInfo= {mainInfo}
                    showGeolocation= {showGeolocation}
                    setShowGeolocation = {setShowGeolocation}
                    setShowFacilities= {setShowFacilities}
                />
                <Facilities 
                    mainInfo= {mainInfo}
                    showFacilities= {showFacilities}
                    setFinished= {setFinished}
                />
            </>
            :
            <>
            {isFinished ? 
                <Box sx={{
                    width: '960px',
                    background: '#FAFAFA',
                    boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
                    borderRadius: '15px',
                    padding: '20px',
                    margin: '30px auto'
                }}
                >
                    <Typography margin={'40px'}>Ваше оголошення найближчим часом буде опрацьоване адміністратором. Статус оголошення Ви можете перевіряти у особистому кабінеті.</Typography>
                    <Button variant="contained" href='/' sx={{width: '300px', margin: '30px 40px', textTransform:'none', fontSize:'20px', padding:'10px 30px', textAlign:'center'}}>На головну</Button>
                </Box>
                :
                <>
                    <MainInfo 
                        // mainInfo= {mainInfo}
                        setMainInfo= {setMainInfo}
                        showMainInfo= {showMainInfo}
                        setShowMainInfo= {setShowMainInfo}
                        setShowGeolocation= {setShowGeolocation}
                    />
                    <Geolocation 
                        mainInfo= {mainInfo}
                        showGeolocation= {showGeolocation}
                        setShowGeolocation = {setShowGeolocation}
                        setShowFacilities= {setShowFacilities}
                    />
                    <Facilities 
                        mainInfo= {mainInfo}
                        showFacilities= {showFacilities}
                        setFinished= {setFinished}/>
                </>
            }
            </>
        }
        
        
        </>
    )
}




import Typography from "@mui/material/Typography";
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import router from "../../routes.tsx";

const Branding = () => {

    return (
        <>
            <BabyChangingStationIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={() => router.navigate('/')}
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                PAPACHATTING
            </Typography>
        </>
    )
}

export default Branding;
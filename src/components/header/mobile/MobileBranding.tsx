import Typography from "@mui/material/Typography";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import router from "../../../routes.tsx";

const MobileBranding = () => {
    return (
        <>
            <BabyChangingStationIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                onClick={() => router.navigate('/')}
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    cursor: 'pointer',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                PAPACHATTING
            </Typography>
        </>
    );
};

export default MobileBranding;
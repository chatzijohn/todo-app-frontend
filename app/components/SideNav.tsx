"use client"
import { Drawer, ListItemButton, ListItemText, Divider, Typography, Toolbar, List, ListItem, Box } from "@mui/material";
import Link from 'next/link'

export default function SideNav() {

    const drawerWidth = '200px'
    
    return (
        <Box component="nav" width={drawerWidth}>    
            <Drawer 
                variant='persistent'
                anchor='left' 
                open={true}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
            >
                <Toolbar />
                <Divider />
                <List>
                    <Link href="/" passHref legacyBehavior>
                        <ListItemButton component="a">
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                    <Link href="/todo" passHref legacyBehavior>
                        <ListItemButton component="a">
                            <ListItemText primary="Todo" />
                        </ListItemButton>
                    </Link>
                    <Link href="/datagrid" passHref legacyBehavior>
                        <ListItemButton component="a">
                            <ListItemText primary="Datagrid" />
                        </ListItemButton>
                    </Link>
                </List>
            </Drawer>
        </Box>
    )
}


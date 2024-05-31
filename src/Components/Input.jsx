import React, { useState } from 'react';
import { Button, Grid, TextField, Paper, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import theme from './Theme';
import MonthlyExpense from './MonthlyExpense';
const Input = ({ items, setItems }) => {
    const [inputVal, setInput] = useState('');
    const [descVal, setDesc] = useState('');
    const [numberVal, setNumber] = useState('');
    const [dateVal, setDate] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            item: inputVal,
            desc: descVal,
            number: numberVal,
            date: dateVal
        };
        setItems([...items, newItem]);
        setInput('');
        setDesc('');
        setNumber('');
        setDate('');
    };

    const handleDelete = (itemToDelete) => {
        setItems(items.filter((item) => item !== itemToDelete));
    };

    return (
        <Box sx={{ p: 0, height: '100vh' }}>
            <Grid container spacing={0} sx={{ height: '100%' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', p: 2,borderRight:'2px black solid',borderBottom:'2px black solid'}}>
                        <Typography variant="h5" gutterBottom style={{ textAlign: 'center',color: '#2C2C2D'}}>EXPENSE CALCULATOR</Typography>
                    <form onSubmit={handleSubmit} style={{ width: '100%',borderColor:'#000000',color:'#00000'}}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            label="Expense no."
                            value={inputVal}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            label="Description"
                            value={descVal}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            label="Expense amount"
                            type="number"
                            value={numberVal}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            label="Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dateVal}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <Button fullWidth size="large" type='submit' variant='outlined' color='primary'>Add Expense</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', p: 2,borderLeft:'2px black solid',borderTop:'2px black solid'   }}>
                <MonthlyExpense items={items}/>
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center', color: '#2C2C2D' }}>EXPENSE LIST:</Typography>
                    <Paper sx={{ width: '100%', maxHeight: '80vh', overflow: 'auto' }}>
                        {items.length > 0 && items.map((item, index) => (
                            <Box key={index} display="flex" flexDirection="column" justifyContent="space-between" p={2} borderBottom="5px solid #ccc" sx={{ wordWrap: 'break-word' }}>
                                <Typography variant="body1"><strong>Expense no:</strong> {item.item}</Typography>
                                <Typography variant="body1"><strong>Description:</strong> {item.desc}</Typography>
                                <Typography variant="body1"><strong>Expense:</strong> {item.number}</Typography>
                                <Typography variant="body1"><strong>Date:</strong> {item.date}</Typography>
                                <IconButton color="secondary" onClick={() => handleDelete(item)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Input;


/*
import React, { useState } from 'react';
import { Button, Grid, TextField, Paper, Typography, IconButton, Box, useMediaQuery } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MonthlyExpense from './MonthlyExpense';

const Input = ({ items, setItems }) => {
    const [inputVal, setInput] = useState('');
    const [descVal, setDesc] = useState('');
    const [numberVal, setNumber] = useState('');
    const [dateVal, setDate] = useState('');

    const isMobileView = useMediaQuery('(max-width:600px)');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            item: inputVal,
            desc: descVal,
            number: numberVal,
            date: dateVal
        };
        setItems([...items, newItem]);
        setInput('');
        setDesc('');
        setNumber('');
        setDate('');
    };

    const handleDelete = (itemToDelete) => {
        setItems(items.filter((item) => item !== itemToDelete));
    };

    return (
        <Box sx={{ p: 0, height: '100vh' }}>
            <Grid container spacing={0} sx={{ height: '100%' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2, borderBottom: isMobileView ? '2px black solid' : 'none' }}>
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center', color: '#2C2C2D' }}>EXPENSE CALCULATOR</Typography>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            label="Expense no."
                            value={inputVal}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            label="Description"
                            value={descVal}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            label="Expense amount"
                            type="number"
                            value={numberVal}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            label="Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dateVal}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <Button fullWidth size="large" type='submit' variant='outlined' color='primary'>Add Expense</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, borderTop: isMobileView ? '2px black solid' : 'none' }}>
                    <MonthlyExpense items={items} />
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center', color: '#2C2C2D' }}>EXPENSE LIST:</Typography>
                    <Paper sx={{ width: '100%', maxHeight: '80vh', overflow: 'auto' }}>
                    {items.length > 0 && items.map((item, index) => (
                            <Box key={index} display="flex" flexDirection="column" justifyContent="space-between" p={2} borderBottom="5px solid #ccc" sx={{ wordWrap: 'break-word' }}>
                                <Typography variant="body1"><strong>Expense no:</strong> {item.item}</Typography>
                                <Typography variant="body1"><strong>Description:</strong> {item.desc}</Typography>
                                <Typography variant="body1"><strong>Expense:</strong> {item.number}</Typography>
                                <Typography variant="body1"><strong>Date:</strong> {item.date}</Typography>
                                <IconButton color="secondary" onClick={() => handleDelete(item)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Input;
*/
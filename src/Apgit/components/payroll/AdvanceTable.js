import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography, Stack, Link, MenuItem } from '@mui/material';
// utils
// import { fDate } from '../../../../utils/formatTime';
// import createAvatar from '../../../../utils/createAvatar';
// import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../components/Label';
// import Avatar from '../../../../components/Avatar';
import Iconify from '../../../components/Iconify';
import { TableMoreMenu } from '../../../components/table';

// ----------------------------------------------------------------------

// InvoiceTableRow.propTypes = {
//   row: PropTypes.object.isRequired,
//   selected: PropTypes.bool,
//   onSelectRow: PropTypes.func,
//   onViewRow: PropTypes.func,
//   onEditRow: PropTypes.func,
//   onDeleteRow: PropTypes.func,
// };

export default function Advance({ row, selected, onSelectRow, onViewRow, onEditRow, onDeleteRow }) {
  const theme = useTheme();

  const { id, employee, empName, department, shift, salary, status, role } = row;
  //   const { id, role, empName, employee, dept, breakTime, shift, salary, status } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox" align="left">
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <Checkbox checked={selected} onClick={onSelectRow} />
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {id}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell align="left">
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <img
            src={employee}
            alt=""
            style={{
              borderRadius: '50%',
              width: '50px',
              marginRight: '.5rem',
            }}
          />
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {empName}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {role}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {department}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {shift}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {salary}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={(status === 'Active' && 'success') || (status === 'not active' && 'warning') || 'default'}
          sx={{ textTransform: 'capitalize' }}
        >
          {status}
        </Label>
      </TableCell>

      {/* 
      
      
      <TableCell align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {dept}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {shift}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
          {salary}
        </Typography>
      </TableCell>
      <TableCell padding="checkbox" align="center">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={(status === 'Active' && 'success') || (status === 'not active' && 'warning') || 'default'}
          sx={{ textTransform: 'capitalize' }}
        >
          {status}
        </Label>
      </TableCell> */}
      {/* 
      <TableCell padding="checkbox" align="center">
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <img
            src={employee}
            alt=""
            style={{
              borderRadius: '50%',
              width: '50px',
              marginRight: '.5rem',
            }}
          />

          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            +20
          </Typography>
        </Stack>
      </TableCell> */}

      {/* actions */}
      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>

              <MenuItem
                onClick={() => {
                  onViewRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:eye-fill'} />
                View
              </MenuItem>

              <MenuItem
                onClick={() => {
                  onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                Edit
              </MenuItem>
            </>
          }
        />
      </TableCell>
      <TableCell>{}</TableCell>
    </TableRow>
  );
}

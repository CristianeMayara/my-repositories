import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const SortDropdown = ({ handleSort }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <div>
      <Button onClick={e => setAnchorEl(e.currentTarget)}>Ordenar</Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={() => {
            handleSort({ sortBy: 'STARGAZERS', orderDirection: 'DESC' });
            setAnchorEl(null);
          }}
        >
          Mais estrelas
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleSort({ sortBy: 'CREATED_AT', orderDirection: 'DESC' });
            setAnchorEl(null);
          }}
        >
          Mais recente
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleSort({ sortBy: 'CREATED_AT', orderDirection: 'ASC' });
            setAnchorEl(null);
          }}
        >
          Mais antigo
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleSort({ sortBy: 'NAME', orderDirection: 'ASC' });
            setAnchorEl(null);
          }}
        >
          Alfabética
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SortDropdown;

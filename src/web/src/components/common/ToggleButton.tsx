import React from 'react';
import { ActiveToggleIcon } from '@/icon/ActiveToggleIcon';
import { InactiveToggleIcon } from '@/icon/InactiveToggleIcon';

const ToggleButton = ({
  isActive,
  onChange,
}: {
  isActive: boolean;
  onChange: (state: boolean) => void;
}) => {
  const handleToggleInactive = () => onChange(false);
  const handleToggleActive = () => onChange(true);

  if (isActive)
    return (
      <div onClick={handleToggleInactive}>
        <ActiveToggleIcon />
      </div>
    );
  else
    return (
      <div onClick={handleToggleActive}>
        <InactiveToggleIcon />
      </div>
    );
};

export default ToggleButton;

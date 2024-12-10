import React from 'react';
import { ActiveToggleIcon } from '@/icon/ActiveToggleIcon';
import { InactiveToggleIcon } from '@/icon/InactiveToggleIcon';

const ToggleButton = ({
  name,
  isActive,
  onChange,
}: {
  name: string;
  isActive: boolean;
  onChange: (key: string, state: boolean) => void;
}) => {
  const handleToggleInactive = () => onChange(name, false);
  const handleToggleActive = () => onChange(name, true);

  if (isActive)
    return (
      <div onClick={handleToggleInactive}>
        <ActiveToggleIcon />
      </div>
    );
  return (
    <div onClick={handleToggleActive}>
      <InactiveToggleIcon />
    </div>
  );
};

export default ToggleButton;

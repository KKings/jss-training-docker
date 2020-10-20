import React from 'react';
import { Link } from '@sitecore-jss/sitecore-jss-react';
import { Link as RouterLink } from 'react-router-dom';

const RoutableSitecoreLink = (props) => {
  const hasValidHref = props.field && props.field.value && props.field.value.href;
  const isEditing = props.editable && props.field.editable;

  if (hasValidHref && !isEditing) {
    const value = props.field.value;

    if(value.href.startsWith('/')) {
      return (
        <RouterLink to={value.href} title={value.title} target={value.target} {...props}>
          {props.children || value.text || value.href}
        </RouterLink>
      );
    }
  }

  return <Link {...props} />;
};

export default RoutableSitecoreLink;
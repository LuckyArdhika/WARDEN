import { DrawerNavItem, DrawerNavItemWLevel } from "@/components/navigation/dashboard";
import { BaseProps } from "@/types/props";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse, List, Popover, Paper } from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/router';
import {ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon} from "@mui/icons-material";
import { memo, useState } from "react";
import { addObjLevelFunction } from "@/script/json-manip/obj";

function GenerateButton({openDrawer, obj, parent}: {openDrawer: boolean, obj: DrawerNavItemWLevel, parent?: boolean}){ // parent only used in the top level of nav
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setShowPopover(true);
  };

  const handlePopoverClose = () => {
    setShowPopover(false);
  };

  return (
  <>
  <List sx={{pl: parent ? 0 : 2}}>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: isExpanded ? 'initial' : 'center',
      px: 2.5,
    }}
    onClick={() => {
      setIsExpanded((recent) => !recent)
    }}
    onMouseOver={(e) => {
      if (openDrawer && !!obj.children && obj.children.length > 0) return e.preventDefault();
      handlePopoverOpen(e);
    }}
    onMouseOut={handlePopoverClose}
  >
    {
      !!obj.icon ?
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: openDrawer ? 1.5 : 'auto',
          justifyContent: 'center',
        }}
      >
        <obj.icon />
      </ListItemIcon>
      : null
    }
    <ListItemText primary={obj.label} sx={{ opacity: (openDrawer || (obj.level != 1)) ? 1 : 0 }} />
    { !!obj.children && obj.children.length > 0 && (openDrawer || (obj.level != 1)) ? (isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />) : null}

    
    {/* OnHover sidedown */}
    { !!obj.children && obj.children.length > 0 && !openDrawer && showPopover && obj.level == 1 ?
      <Paper style={{
        position: 'fixed',
        top: '80px',
        left: `${63 * obj.level}px`
      }}>
      <List component="div" disablePadding>
        {obj.level}
      {obj.children.map((obj2, index2) => {
        // @ts-ignore
        return <GenerateButton openDrawer={openDrawer} obj={obj2} key={index2}/>
      })}
      </List>
    </Paper> : null
    }
  </ListItemButton>

  {/* Normal dropdown */}
  { !!obj.children && obj.children.length > 0 && obj.level != 1 ? <Collapse in={isExpanded} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
    {obj.children.map((obj2, index2) => {
      // @ts-ignore
      return <GenerateButton openDrawer={openDrawer} obj={obj2} key={index2}/>
    })}
    </List>
  </Collapse> : null }

  </List>
  </>
  )
}

export default memo(function NestedDropdown(props: Partial<BaseProps> & {navSchema: DrawerNavItem[], openDrawer: boolean}){
  const router = useRouter();
  const navSchema: DrawerNavItemWLevel[] = addObjLevelFunction(props.navSchema);

  return navSchema.map((obj, index) => (
      <ListItem key={index} disablePadding sx={{ display: 'block', backgroundColor: router.pathname == obj.href ? '#c4e3ff' : 'white' }}>
        {!!obj.href ? <Link href={obj.href} className="dc">
          {/* {generateButton(props.open, obj, true)} */}
          <GenerateButton openDrawer={props.openDrawer} obj={obj} parent={true}/>
        </Link> : <GenerateButton openDrawer={props.openDrawer} obj={obj} parent={true}/> }
      </ListItem>
    ))
})
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Badge from "@material-ui/core/Badge";
import Icon from "@material-ui/core/Icon";
import { useHistory } from "react-router-dom";

const TwitterIconTabs = () => {
    const [index, onChange] = useState(0);
    const history = useHistory();

    function renderRoute(param) {
        console.log(param);
        onChange(param)
        switch (param) {
            case 0:
                return history.push("/Home");
            case 2:
                return history.push("/Profile");
        }
    };

    return (
        <Tabs
            variant={"fullWidth"}
            centered
            value={index}
            onChange={(e, val) => renderRoute(val)}>
            <Tab
                className={"MuiTab--iconOnly"}
                classes={{
                    wrapper: "MuiTab-wrapper"
                }}
                icon={
                    <Icon>home</Icon>
                }
                disableRipple
            />
            <Tab
                className={"MuiTab--iconOnly"}
                classes={{
                    wrapper: "MuiTab-wrapper"
                }}
                icon={<Icon>search</Icon>}
                disableRipple
            />
            <Tab
                className={"MuiTab--iconOnly"}
                classes={{
                    wrapper: "MuiTab-wrapper"
                }}
                icon={
                    <Icon>person</Icon>
                }
                disableRipple
            />
            <Tab
                className={"MuiTab--iconOnly"}
                classes={{
                    wrapper: "MuiTab-wrapper"
                }}
                icon={<Icon>mail_outlined_rounded</Icon>}
                disableRipple
            />

        </Tabs>
    );
};

TwitterIconTabs.getTheme = muiBaseTheme => ({
    MuiTabs: {
        root: {
            width: "100%",
            borderBottom: "1px solid #E6ECF0"
        },
        indicator: {
            backgroundColor: "#1da1f2"
        }
    },
    MuiTab: {
        root: {
            minHeight: 53,
            minWidth: 0,
            [muiBaseTheme.breakpoints.up("md")]: {
                minWidth: 0
            },
            "&:hover": {
                "& .MuiTab-label": {
                    color: "#1da1f2"
                }
            },
            "&$selected": {
                "& *": {
                    color: "#1da1f2"
                }
            },
            "&.MuiTab--iconOnly": {
                "& .MuiTab-wrapper": {
                    width: "auto",
                    padding: 8,
                    borderRadius: 25,
                    color: "#657786",
                    "&:hover": {
                        color: "#1da1f2",
                        backgroundColor: "rgba(29, 161, 242, 0.1)"
                    }
                }
            }
        },
        textColorInherit: {
            opacity: 1
        },
        wrapper: {
            "& svg, .material-icons": {
                fontSize: 26.25
            }
        },
        labelContainer: {
            width: "100%",
            padding: 15,
            [muiBaseTheme.breakpoints.up("md")]: {
                padding: 15
            }
        },
        label: {
            textTransform: "none",
            fontSize: 15,
            fontWeight: 700,
            color: "#657786"
        }
    },
    MuiBadge: {
        root: {
            [`&.MuiBadge--dotted, &.MuiBadge--number`]: {
                "& .MuiBadge-badge": {
                    color: muiBaseTheme.palette.common.white,
                    backgroundColor: "#1da1f2",
                    minWidth: 0
                }
            },
            [`&.MuiBadge--dotted .MuiBadge-badge`]: {
                width: 6,
                height: 6,
                top: 0,
                right: 4,
                padding: 0
            },
            [`&.MuiBadge--number .MuiBadge-badge`]: {
                top: -4,
                right: 0,
                boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0.14rem",
                width: 16,
                height: 16,
                fontSize: 10.7,
                fontWeight: "bold"
            }
        },
        colorPrimary: {
            color: muiBaseTheme.palette.common.white
        }
    }
});


export default TwitterIconTabs;

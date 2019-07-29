package com.workeredu.admin.mapper;

import com.workeredu.admin.common.mapper.BaseMapper;
import com.workeredu.admin.entity.SysUser;

public interface SysUserMapper extends BaseMapper<SysUser, String> {

    SysUser selectByUserName(String username);

}
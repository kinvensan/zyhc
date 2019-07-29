package com.workeredu.admin.mapper;

import com.workeredu.admin.common.mapper.BaseMapper;
import com.workeredu.admin.entity.SysRole;

import java.util.Set;

public interface SysRoleMapper extends BaseMapper<SysRole, Integer> {

    Set<SysRole> selectByUserName(String username);

}
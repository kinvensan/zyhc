package com.workeredu.admin.service;



import com.workeredu.admin.common.service.IBaseService;
import com.workeredu.admin.entity.SysRole;

import java.util.List;
import java.util.Set;

/**
 * <p>
 * [权限管理] 角色表 服务类
 * </p>
 * @author wang chen chen
 * @since 2018-10-23
 */
public interface ISysRoleService extends IBaseService<SysRole, Integer> {

    Set<SysRole> selectByPrimaryKeyCollection(List<Integer> ids);

    Set<SysRole> selectByUserName(String username);

}

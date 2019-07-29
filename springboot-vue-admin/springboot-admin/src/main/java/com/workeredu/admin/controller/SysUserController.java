package com.workeredu.admin.controller;


import com.workeredu.admin.common.controller.BaseController;
import com.workeredu.admin.entity.SysUser;
import com.workeredu.admin.service.ISysUserService;
import com.workeredu.admin.vo.Result;
import com.workeredu.admin.vo.SysUserVo;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * [权限管理] 用户表 前端控制器
 * </p>
 *
 * @author wang chen chen
 * @since 2018-10-23
 */

@Slf4j
@Api(tags = "用户")
@RestController
@RequestMapping("/user")
public class SysUserController extends BaseController<SysUser, String, ISysUserService> {

    @GetMapping("/findByUsername")
    public SysUser findByUsername(@RequestParam String username) {
        return baseService.findByUsername(username);
    }

    @GetMapping("/info")
    public Result<SysUserVo> info() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        SysUserVo userInfo = baseService.findUserInfo(userDetails.getUsername());
        log.debug("用户信息：{}", userInfo );
        return Result.success(userInfo);
    }

    /**
     * 功能描述: 修改密码
     * @param pwd
     * @param isPwd
     * @return
     */
    @PostMapping("/setPwd")
    public Result<Boolean> setPwd(String pwd, String isPwd){
        return Result.success(Boolean.TRUE);
    }


}
